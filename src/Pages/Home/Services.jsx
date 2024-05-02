import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const Services = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const result = await axios.get("services.json");
      return result.data;
    },
  });

  return (
    <div className="py-10">
      <div className="space-y-5 w-[600px] mx-auto text-center">
        <p className="font-bold text-red-500 text-lg">Services</p>
        <p className="font-bold  text-2xl">Our Service Area</p>
        <p className="opacity-80">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
    </div>
  );
};
