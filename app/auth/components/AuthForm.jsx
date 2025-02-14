"use client";

import { useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { Card } from "./Card";
import { CardContent } from "./CardContent";
import { CardHeader } from "./CardHeader";
import { CardTitle } from "./CardTitle";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div
      className="flex items-center justify-center mt-10 font-sans min-h-screen text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/auth-background.png')" }}
    >
      <Card className="w-[400px] p-8 shadow-xl bg-blue-950 rounded-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-semibold">
            {isLogin ? "Login to your account" : "Create an account"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-5">
            {!isLogin && (
              <Input
                type="text"
                placeholder="Your name"
                className="w-full p-3 rounded-md bg-[#333] border border-gray-600 text-white"
                required
              />
            )}
            <Input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-md bg-[#333] text-white"
              required
            />
            <Input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-md bg-[#333] text-white"
              required
            />
            <Button className="w-full bg-blue-900 hover:bg-blue-950  rounded-md py-3 text-lg font-medium">
              {isLogin ? "Login" : "Register"}
            </Button>
          </form>
          <p className="mt-5 text-center text-sm text-gray-400">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <span
              className="text-amber-500 cursor-pointer ml-1 hover:underline"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Register" : "Login"}
            </span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
