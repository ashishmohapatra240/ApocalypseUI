import { useMutation } from "@tanstack/react-query";

interface WaitlistResponse {
  message: string;
  data: {
    id: string;
    email: string;
    createdAt: string;
  };
}

interface WaitlistError {
  error: string;
}

const joinWaitlist = async (email: string): Promise<WaitlistResponse> => {
  const response = await fetch("/api/waitlist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error((data as WaitlistError).error || "Something went wrong");
  }

  return data as WaitlistResponse;
};

export const useWaitlist = () => {
  return useMutation({
    mutationFn: joinWaitlist,
  });
};

