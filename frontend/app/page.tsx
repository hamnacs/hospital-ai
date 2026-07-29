"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96 flex flex-col gap-5">
        <h1 className="text-3xl font-bold text-center">
          🏥 Hospital AI
        </h1>

        <Input
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChange={setEmail}
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={setPassword}
        />

        <Button
          text="Login"
          onClick={() => {
            console.log("Email:", email);
            console.log("Password:", password);
          }}
        />
      </div>
    </main>
  );
}