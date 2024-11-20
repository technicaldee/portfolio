import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";

export const AboutMe = () => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>About Me</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          Hi My name is Edidiong Udoh. <br></br>
          <b>Full Stack Web and Mobile Developer.</b> <br></br>
          <br /> I have been building applications for individuals and
          businesses for the last 6 years using frameworks as Laravel,
          ExpressJS, NextJS, ReactJS, Flutter, React Native. I frequently code
          in PHP, Javascript, Dart, Kotlin, Swift and C. I am also proficient
          DevOps including CICD, configuring bare metal servers with an OS and
          Docker.
        </p>
      </CardContent>
    </Card>
  );
};
