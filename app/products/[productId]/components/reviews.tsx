'use client'
import { useEffect, useState } from "react";
import { Product, Review } from "@/app/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { PenSquareIcon, Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { toast } from "react-toastify";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";
import { useUserContext } from "@/context/userContext";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Reviews({
  product
}: {
  product: Product
}) {
  const { currentUser, currentUserData } = useUserContext();
  const [reviews, setReviews] = useState<Review[] | undefined>()
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [success, setSuccess] = useState<string>("");
  const [accordionValue, setAccordionValue] = useState<string>("");

  useEffect(() => {
    axios.get(process.env.NEXT_PUBLIC_BACKEND_ORIGIN! + `/api/products/reviews/${product.id}`)
      .then(res => {
        const r = res.data.data as Review[]
        setReviews(r)
      })
      .catch(err => {
        setReviews([])
        console.error(err)
      })
  }, [])

  // Function to handle submitting a new review
  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (rating === 0) {
      toast.error("Please select a rating");
      return;
    }

    if (!comment.trim()) {
      toast.error("Please tell your review");
      return;
    }

    // Clear previous messages
    setSuccess("");
    setIsSubmitting(true);

    try {
      const name = currentUserData?.name || currentUser?.displayName
      const email = currentUser?.email

      await axios.post(process.env.NEXT_PUBLIC_BACKEND_ORIGIN! + `/api/products/reviews`, {
        rating,
        comment,
        name,
        email,
        productId: product.id
      });

      // Reset form fields
      setRating(0);
      setComment("");
      setSuccess("Review submitted successfully!");

      // Close the accordion after successful submission
      setTimeout(() => {
        setAccordionValue("");
        // Refresh reviews
        axios.get(process.env.NEXT_PUBLIC_BACKEND_ORIGIN! + `/api/products/reviews/${product.id}`)
          .then(res => {
            const r = res.data.data as Review[]
            setReviews(r)
          })
      }, 1500);

    } catch (err) {
      toast.error("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to render stars for selecting a rating
  const RatingStars = ({ value, onChange }: { value: number, onChange: (rating: number) => void }) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className="focus:outline-none"
            onClick={() => onChange(star)}
          >
            <Star
              className={`h-6 w-6 ${star <= value
                ? "fill-yellow-400 text-yellow-400"
                : "fill-transparent text-gray-300"
                }`}
            />
          </button>
        ))}
      </div>
    );
  };

  // Function to render stars for displaying a rating
  const DisplayStars = ({ rating }: { rating: number }) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${star <= rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-transparent text-gray-300"
              }`}
          />
        ))}
      </div>
    );
  };

  // Function to get initials from name for avatar
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <div className="mt-10 space-y-4 md:space-y-4">
      <div className="flex items-center gap-x-4 flex-wrap">
        <h2 className="text-2xl font-bold font-bangers">Customer Reviews</h2>

        {/* Reviews summary */}
        <div className="flex items-center gap-2">
          <DisplayStars rating={Math.round(product.rating ?? 0)} />
          <span className="text-lg font-semibold">{product.rating?.toFixed(1) || 0.0}</span>
          <span className="text-gray-500">({product.numberOfReviews || 0} reviews)</span>
        </div>
      </div>

      {/* <Separator /> */}

      {/* Existing reviews */}
      {reviews === undefined ? (
        <>
          <Skeleton className="w-full h-20" />
          <Skeleton className="mt-4 w-full h-20" />
        </>
      ) : reviews.length > 0 ? (
        <div className="space-y-4">
          {reviews.map((review) => (
            <Card key={review._id} className="p-2 px-4 gap-0">
              <CardHeader className="p-0 pb-2">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>{getInitials(review.name)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">
                        {review.name}
                        {' '}
                        •
                        {' '}
                        <span className="text-gray-500 text-sm font-normal">
                          {new Date(review.createdAt).toLocaleDateString('en-US', {
                            day: '2-digit',
                            month: 'long',
                            year: 'numeric'
                          })}
                        </span>
                      </CardTitle>
                      <DisplayStars rating={review.rating} />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-700">{review.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-500">No reviews yet. Be the first to review this product!</p>
        </div>
      )}

      <Separator />

      {/* Write a review accordion */}
      <Accordion
        type="single"
        collapsible
        value={accordionValue}
        onValueChange={setAccordionValue}
        className="w-full"
      >
        <AccordionItem value="write-review" className="outline rounded-lg p-2">
          <AccordionTrigger className="py-1 px-2">
            <span className="font-semibold inline-flex gap-2 items-center">
              <PenSquareIcon className="text-yellow-600" />
              Write a Review
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-4 pt-4 pb-6">
            <form onSubmit={handleSubmitReview} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="rating">Rating</Label>
                <RatingStars value={rating} onChange={setRating} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="comment">Review</Label>
                <Textarea
                  id="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Write your review here..."
                  rows={4}
                />
              </div>

              {success && <p className="text-green-500 text-sm">{success}</p>}

              {currentUser ? (
                <Button
                  type="submit"
                  className="w-full sm:w-auto bg-yellow-300 hover:bg-amber-300 drop-shadow-[3px_3px_black] text-black"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Review"}
                </Button>
              ) : (
                <Button
                  type="button"
                  asChild
                  className="w-full sm:w-auto bg-yellow-300 hover:bg-amber-300 drop-shadow-[3px_3px_black] text-black"
                  disabled={isSubmitting}
                >
                  <Link href="/sign-up" className="">
                    Sign Up
                  </Link>
                </Button>
              )}
            </form>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}