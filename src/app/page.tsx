import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>hello world</div>
      <Button>click</Button>

      <div className="bg-white dark:bg-gray-800">
        <p className="text-gray-800 dark:text-gray-200">
          This text is black in light mode and light gray in dark mode.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded dark:bg-blue-700 dark:hover:bg-blue-900">
          Button
        </button>
      </div>

    </main>
  );
}
