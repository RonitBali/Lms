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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useState } from "react"

const Login = () => {
  const [LoginInput, setLoginInput] = useState({ email: "", password: "" })
  const [SignupInput, setSignupInput] = useState({ name: "", email: "", password: "" })

  const changehandler = (e , type) =>{
    const{name,value} = e.target;
    if(type === "signup"){
      setSignupInput({...SignupInput,[name]: value})
    }
    else{
      setLoginInput({...LoginInput,[name]: value})
    }
  }

  const handleRegistration = (type) =>{
       const inputData = type === "signup" ? SignupInput:LoginInput;
       console.log(inputData);
  }

  return (
    <div className="flex items-center w-full justify-center">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="Login">Login</TabsTrigger>
          <TabsTrigger value="Signup">Signup</TabsTrigger>
        </TabsList>
        <TabsContent value="Login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Login with your Email and Password.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Email</Label>
                <Input id="current"
                 type="email" 
                 placeholder="Eg. abc@gmail.com"
                  required="true"
                  name="email"
                  value={LoginInput.email}
                  onChange = {(e)=>changehandler(e, "login")} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">Password</Label>
                <Input id="new" 
                type="password" 
                placeholder="Eg. xyz" 
                required="true" 
                name="password"
                value={LoginInput.password}
                 onChange = {(e)=>changehandler(e, "login")} />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleRegistration("login")}>Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="Signup">
          <Card>
            <CardHeader>
              <CardTitle>Signup</CardTitle>
              <CardDescription>
                Create a new account and click signup when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Name</Label>
                <Input id="current"
                name="name"
                value={SignupInput.name}
                 type="text" 
                 placeholder="Eg. Ronit" 
                 required="true" 
                 onChange={(e)=>changehandler(e, "signup")}/>
              </div>
              <div className="space-y-1">
                <Label htmlFor="current">Email</Label>
                <Input id="current"
                name="email"
                value={SignupInput.email}
                 type="email" 
                 placeholder="Eg. abc@gmail.com"
                  required="true" 
                  onChange = {(e)=>changehandler(e, "signup")}/>
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">Password</Label>
                <Input id="new"
                 type="password" 
                 name="password"
                 value={SignupInput.password}
                placeholder="Eg. xyz" 
                required="true"
                onChange={(e)=>changehandler(e, "signup")}
                 />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleRegistration("login")}>Signup</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Login;
