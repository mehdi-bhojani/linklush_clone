import {
  CreditCard,
  LogOut,
  Settings,
  User,
  Users,
  Lightbulb,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown";
import UserAvator from "./Avator";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export function DropdownMenuDemoComponent() {
  const { data: session } = useSession();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="outline-none border-none">
          <UserAvator />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-10" align="start" side="bottom">
        <DropdownMenuLabel>{session?.user?.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/admin/profile">
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
          </Link>
          <Link href="/upgrade">
            <DropdownMenuItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
            </DropdownMenuItem>
          </Link>

          <Link href="admin/contribute">
            {" "}
            <DropdownMenuItem>
              <Lightbulb className="mr-2 h-4 w-4" />
              <span>Suggest a feature</span>
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem onClick={() => signOut()}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
