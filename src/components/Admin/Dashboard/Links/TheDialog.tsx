import React from "react";
import PropTypes from "prop-types";
import { JsonObject } from "next-auth/adapters";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/Dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
  
function TheDialog(props: JsonObject) {
  return (
    <div>
      <Dialog>
      <DialogTrigger asChild>
        <Button>Add New Link</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px] rounded">
        <DialogHeader>
          <DialogTitle>Please enter the link you want to add.</DialogTitle>
          <DialogDescription>
            We will take care of the rest.
          </DialogDescription>
        </DialogHeader>
        <div className="">
          <div className="items-center">
            <Input
              id="link"
              defaultValue="https://linklu.sh"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit"><Plus color="white" strokeWidth={1} /> Add</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </div>
  );
}

TheDialog.propTypes = {};

export default TheDialog;
