import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";

export const BasicCard = () => (
  <Card className="w-[350px]">
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Card Description</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Card Content</p>
    </CardContent>
    <CardFooter>
      <p>Card Footer</p>
    </CardFooter>
  </Card>
);

export const ProjectCard = () => (
  <Card className="w-[350px]">
    <CardHeader>
      <CardTitle>Create project</CardTitle>
      <CardDescription>Deploy your new project in one-click.</CardDescription>
    </CardHeader>
    <CardContent>
      <form>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <label htmlFor="name" className="text-sm font-medium leading-none">
              Name
            </label>
            <input
              id="name"
              placeholder="Name of your project"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <label htmlFor="framework" className="text-sm font-medium leading-none">
              Framework
            </label>
            <select
              id="framework"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="next">Next.js</option>
              <option value="sveltekit">SvelteKit</option>
              <option value="astro">Astro</option>
              <option value="nuxt">Nuxt.js</option>
            </select>
          </div>
        </div>
      </form>
    </CardContent>
    <CardFooter className="flex justify-between">
      <Button variant="outline">Cancel</Button>
      <Button>Deploy</Button>
    </CardFooter>
  </Card>
);

export const ProductCard = () => (
  <Card className="w-[350px] overflow-hidden">
    <div className="aspect-video w-full bg-muted relative">
      <div className="absolute top-2 right-2">
        <Badge>New</Badge>
      </div>
    </div>
    <CardHeader>
      <CardTitle>Product Name</CardTitle>
      <CardDescription>Product category</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground">
        This is a brief description of the product. It highlights the key features and benefits.
      </p>
      <p className="text-lg font-bold mt-2">$99.99</p>
    </CardContent>
    <CardFooter>
      <Button className="w-full">Add to Cart</Button>
    </CardFooter>
  </Card>
);

export const ProfileCard = () => (
  <Card className="w-[350px]">
    <CardHeader className="flex flex-row items-center gap-4">
      <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
        JP
      </div>
      <div>
        <CardTitle>John Doe</CardTitle>
        <CardDescription>Software Engineer</CardDescription>
      </div>
    </CardHeader>
    <CardContent>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <span className="text-sm text-muted-foreground">Email:</span>
          <span className="text-sm">john.doe@example.com</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-muted-foreground">Location:</span>
          <span className="text-sm">San Francisco, CA</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-muted-foreground">Joined:</span>
          <span className="text-sm">January 2023</span>
        </div>
      </div>
    </CardContent>
    <CardFooter className="flex justify-between">
      <Button variant="outline" size="sm">
        Message
      </Button>
      <Button size="sm">View Profile</Button>
    </CardFooter>
  </Card>
);

export const CardExamples = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <h3 className="text-lg font-medium mb-2">Basic Card</h3>
      <BasicCard />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-2">Project Card</h3>
      <ProjectCard />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-2">Product Card</h3>
      <ProductCard />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-2">Profile Card</h3>
      <ProfileCard />
    </div>
  </div>
);
