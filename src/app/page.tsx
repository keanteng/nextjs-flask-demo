import ModelForm from "@/components/model-form";

export default function Home() {
  return (
    <div className="min-h-screen p-4">
      <div className="max-w-2xl mx-auto">
        <div className="justify-center mt-2 md:mt-14 md:mb-20 mb-32">
          <ModelForm />
        </div>
      </div>
    </div>
  );
}
