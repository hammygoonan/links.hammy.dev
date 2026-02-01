import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input"

const AddLink = () => {
  return (
    <Drawer>
      <DrawerTrigger className="absolute bottom-5 right-5 cursor-pointer bg-green-300 rounded-full">
        <Plus size={48} strokeWidth="1" />
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Add link</DrawerTitle>
            <DrawerDescription>
              <Input placeholder="https://example.com" type="url" />
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default AddLink
