import Link from "next/link";

export default function NavFooter() {
    return (
      <div className="py-4 px-5 w-full bottom-0 fixed backdrop-blur-md">
        <div className="w-full justify-between items-center flex flex-col md:flex-row font-mono text-stone-700">
          <p className="hover:underline">keanteng</p>
          <p className="hover:underline">Build With NextJS & Flask Backend</p>
          <p className="hover:underline">
            <Link href="https://github.com/keanteng/nextjs-flask-demo">
              source
            </Link>
          </p>
        </div>
      </div>
    )
}