"use client";

import Link from "next/link";
import "animate.css";
import { Check } from "@gravity-ui/icons";
import { ArrowLeft, Sun } from "lucide-react";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";

export default function SignUpPage() {

  const onSubmit = async (e) => {
    e.preventDefault();

     const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

   
      const {data, error} = await authClient.signUp.email({

        name,
        image,
        email,
        password
      })

      console.log({data, error})

    
  };

  return (
    <section className="min-h-screen bg-linear-to-br from-orange-50 via-white to-pink-50 px-4 py-10 sm:py-16">
      
      {/* Back to Home */}
      <div className="mx-auto w-full max-w-xl mb-5 animate__animated animate__fadeInDown">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-orange-500 font-medium transition-colors duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </div>

      <Card className="mx-auto w-full max-w-xl rounded-3xl overflow-hidden border border-orange-100 shadow-2xl p-0 animate__animated animate__fadeInUp">
        
        {/* TOP HEADER */}
        <div className="bg-linear-to-br from-orange-500 to-pink-500 px-6 sm:px-8 py-10 text-white text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm shadow-lg mb-5">
            <Sun className="w-8 h-8" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            Join SunCart
          </h1>

          <p className="text-white/90 text-sm sm:text-base">
            Create your account and start shopping
          </p>
        </div>

        {/* FORM AREA */}
        <div className="px-6 sm:px-10 py-8 sm:py-10">
          <h2 className="text-center text-2xl font-bold text-gray-900 mb-8">
            Register
          </h2>

          <Form className="w-full flex flex-col gap-5" onSubmit={onSubmit}>
            <TextField isRequired name="name" type="text">
              <Label>Name</Label>
              <Input placeholder="Enter your name" />
              <FieldError />
            </TextField>

            <TextField isRequired name="image" type="text">
              <Label>Image URL</Label>
              <Input placeholder="Enter image URL" />
              <FieldError />
            </TextField>

            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                ) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label>Email</Label>
              <Input placeholder="john@example.com" />
              <FieldError />
            </TextField>

            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }
                return null;
              }}
            >
              <Label>Password</Label>
              <Input placeholder="Enter your password" />
              <Description>
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>
              <FieldError />
            </TextField>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                type="submit"
                className="w-full sm:flex-1 bg-linear-to-r from-orange-500 to-pink-500 text-white font-semibold"
              >
                <Check />
                Submit
              </Button>

              <Button
                type="reset"
                variant="secondary"
                className="w-full sm:flex-1"
              >
                Reset
              </Button>
            </div>
          </Form>
        </div>
      </Card>
    </section>
  );
}