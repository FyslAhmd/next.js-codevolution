import { Card } from "@/components/card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <div>
      <Card>
        <div className="text-2xl text-red-600">Archived Notifications</div>
        <div>
          <Link href="/dashboard">Notification</Link>
        </div>
      </Card>
    </div>
  );
}
