"use client";

import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Card from "../ui/Card";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Card>
      <h1 className="mb-6 text-2xl font-bold text-black">
        Hospital Login
      </h1>

      <div className="space-y-4">
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

        <Button text="Login" />
      </div>
    </Card>
  );
}