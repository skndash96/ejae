'use client'
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const PaymentSuccessDialog = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/my-orders')
    }, 2000)
  }, [])

  return (
    <div className="p-4 rounded-2xl bg-white mx-auto w-fit flex flex-col-reverse md:flex-row gap-4">
      <Image className="self-center" src="/images/char-peace.png" width={200} height={300} alt="Success" />

      <div>
        <h1 className="text-2xl font-lucky flex items-center gap-2">
          <CheckCircle />
          Payment Successful!
        </h1>

        <p className="">Your order has been placed successfully.</p>
        
        <p className="mt-4 text-gray-500">
          Redirecting to your orders page...
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccessDialog;