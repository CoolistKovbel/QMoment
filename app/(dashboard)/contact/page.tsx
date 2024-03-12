import ContactForm from "@/app/components/contact-form";
import { getSession } from "@/app/lib/actions";



const Page = async () => {

  const userSession = await getSession()

  return (
    <main className="min-h-screen w-full bg-[#111] text-white flex items-center justify-center">
      <div className="max-w-3xl p-8 rounded-lg border-2 border-gray-800">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Need a Ray of Light?
        </h2>
        
        <p className="text-lg mb-6">
          In the darkest moments, when you&#39;re surrounded by shadows, and the
          world seems to have turned its back on you, I&#39;m here to be your
          guiding light. Feel free to reach out, ask questions, or just share
          your thoughts. We can navigate the shadows together.
        </p>

        {/* Contact Form */}
        <ContactForm userId={userSession.userId as string} />

        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Connect with Me:</h3>
            <ul className="flex gap-4">
              <li>
                <a href="#" className="text-blue-400 hover:text-blue-300">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-400 hover:text-purple-300">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Or Drop an Email:</h3>
            <p className="text-gray-400">lyub@gg.com</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
