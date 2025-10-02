import "./globals.css";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "Could not find requested resource.",
};

export default function GlobalNotFound() {
  return (
    <html lang='en' className={poppins.className}>
      <body>
        <div className='mx-auto grid min-h-dvh w-full place-items-center p-6 md:p-10'>
          <div className='w-full max-w-md'>
            <div className='flex flex-col gap-6 rounded-xl border border-b-2 border-border border-b-border/90 bg-card py-6 text-card-foreground shadow-2xl'>
              <div className='grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6'>
                <h1 className='text-2xl leading-none font-semibold'>
                  Page Not Found.
                </h1>
              </div>
              <div className='px-6'>
                <p className='text-sm text-muted-foreground'>
                  Could not find requested resource.
                </p>
              </div>
              <div className='flex items-center justify-end px-6'>
                <Link
                  className='cursor-pointer text-sm font-medium text-link underline-offset-4 transition-all hover:text-link/80 hover:underline'
                  href='/'
                >
                  Return Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
