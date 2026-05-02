"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { BiEdit, BiUser } from "react-icons/bi";
import "animate.css";

export function UpdateUserInformation() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

   const { data, error } = await authClient.updateUser({
      name,
      image,
    });

    console.log({ data, error });
  };

  return (
    <Modal>
      <Button
        variant="secondary"
        className="rounded-xl border border-orange-200 bg-white text-orange-600 font-semibold
        hover:bg-orange-50 hover:text-orange-700 hover:shadow-lg hover:shadow-orange-500/10
        transition-all duration-300 hover:scale-[1.02] active:scale-95"
      >
        <BiEdit className="text-lg" />
        Update Profile
      </Button>

      <Modal.Backdrop className="backdrop-blur-sm bg-black/30 animate__animated animate__fadeIn">
        <Modal.Container
          placement="auto"
          className="animate__animated animate__zoomIn animate__faster px-4"
        >
          <Modal.Dialog
            className="w-full sm:max-w-md rounded-3xl overflow-hidden border border-orange-100 shadow-2xl bg-white"
          >
            <Modal.CloseTrigger className="rounded-full hover:bg-orange-50 transition-colors" />

            {/* Header */}
            <Modal.Header className="bg-linear-to-br from-orange-500 to-pink-500 text-white px-6 py-6">
              <Modal.Icon
                className="bg-white/20 text-white backdrop-blur-sm
                size-14 rounded-2xl shadow-lg flex items-center justify-center"
              >
                <BiUser className="size-6" />
              </Modal.Icon>

              <div className="ml-3">
                <Modal.Heading className="text-xl sm:text-2xl font-bold">
                  Update Profile
                </Modal.Heading>
                <p className="text-white/85 text-sm mt-1">
                  Keep your SunCart profile fresh ✨
                </p>
              </div>
            </Modal.Header>

            {/* Body */}
            <Modal.Body className="p-6 sm:p-8 bg-linear-to-b from-white to-orange-50/40">
              <Surface
                variant="default"
                className="rounded-2xl border border-orange-100 shadow-md bg-white p-5 sm:p-6"
              >
                <form onSubmit={onSubmit} className="flex flex-col gap-5">
                  <TextField className="w-full" name="name" type="text">
                    <Label className="font-semibold text-slate-700 mb-1">
                      Name
                    </Label>
                    <Input
                      placeholder="Enter your name"
                      className="rounded-xl"
                    />
                  </TextField>

                  <TextField className="w-full" name="image" type="url">
                    <Label className="font-semibold text-slate-700 mb-1">
                      Image URL
                    </Label>
                    <Input
                      placeholder="https://example.com/photo.jpg"
                      className="rounded-xl"
                    />
                  </TextField>

                  <Modal.Footer className="px-0 pt-3 flex flex-col sm:flex-row gap-3">
                    <Button
                      slot="close"
                      variant="secondary"
                      className="w-full sm:flex-1 rounded-xl font-medium
                      transition-all duration-300 hover:scale-[1.02]
                      hover:bg-slate-100 active:scale-95"
                    >
                      Cancel
                    </Button>

                    <Button
                      type="submit"
                      className="w-full sm:flex-1 rounded-xl font-semibold text-white
                      bg-linear-to-r from-orange-500 to-pink-500
                      hover:shadow-xl hover:shadow-orange-500/20
                      transition-all duration-300 hover:scale-[1.02]
                      active:scale-95"
                    >
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}