import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Avatar,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { TwitterLogoIcon } from "@radix-ui/react-icons"
import { Inbox, Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="relative">
      <div className="flex justify-end absolute top-0 right-0">
        <Button>Login/SignUp</Button>
      </div>
      <div className="flex items-center justify-center m-auto min-h-screen flex-col">
        <Card className="w-[500px] bg-black text-white border-gray-800">
          <CardHeader className="p-6">
            <CardDescription className="text-sm">We're launching...</CardDescription>
            <CardTitle className="flex flex-row items-center mt-2">
              <Avatar className="rounded">
                <AvatarImage src="https://www.curacv.com/logo.svg" ></AvatarImage>
              </Avatar>
              <Label className="text-3xl ml-2 font-bold">CuraCV</Label>
            </CardTitle>
          </CardHeader>
          <CardContent className="px-6 pb-6">
            <CardDescription className="text-base text-muted-foreground">
              CuraCV is your future go-to for creating a professional resume that turns heads. With our <span className="text-white">AI</span>, crafting a standout resume is a breeze, helping you land the job you’ve always wanted. Get ready - this is going to be lit!
            </CardDescription>
            <CardDescription className="divide-y divide-gray-400 divide-solid mt-4">
              <Label className="mt-4 text-muted-foreground">Follow us on these platforms for updates:</Label>
              <a href="https://x.com/cura_cv" target="_blank" rel="noopener noreferrer"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="w-5 h-5 text-muted-foreground logo mt-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"></path></svg></a>
            </CardDescription>
            <div className="inline-block w-full min-w-[1em] h-px self-stretch bg-gray-800"></div>
            <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Drop Your Email for Early Access & Updates!</Label>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-row">
                  <Input id="name" placeholder="Enter your Email" className="border-gray-800" />
                  <Button className="ml-1">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="mr-1 w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path></svg>
                    Subscribe
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
        <Label className="text-muted-foreground mt-7">Backed by</Label>
        <Label className="text-2xl font-base">Microsoft for Startups</Label>
      </div>
    </div>
  )
}
