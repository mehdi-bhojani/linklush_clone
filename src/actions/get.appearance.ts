import { Appearance, updateAppearanceAtom } from "@/lib/store";
import useSWR from "swr";
import { useAtom } from "jotai";

const fetcher = (url: string): Promise<Appearance> => fetch(url).then((res) => res.json());

export const useGetAppearanceById = (id: number) => {
    const { data, error } = useSWR<Appearance>(`/api/appearance?id=${id}`, fetcher);
    const [, setAppearance] = useAtom(updateAppearanceAtom);

    if (error) {
        console.error("Error fetching appearance data:", error);
        return null;
    }
    if (!data) return null;
    // console.log("Data", data);
    // setAppearance(data); // Assuming the endpoint returns a single Appearance object

    return data;
}
