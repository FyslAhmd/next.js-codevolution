import { Card } from "@/components/card";
import Link from "next/link";

export default function Notifications() {
  return (
    <div>
      <Card>
        <div className="text-2xl text-blue-500">Notifications</div>
        <div>
          <Link href="/dashboard/archived">Archived</Link>
        </div>
      </Card>
    </div>
  );
}
