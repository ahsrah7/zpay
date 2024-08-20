import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { PrismaClient } from "@repo/prisma/client";

const client = new PrismaClient();
export default function Home() {
  return (
    <div className="text-2xl">
      HI there
    </div>
  );
}
