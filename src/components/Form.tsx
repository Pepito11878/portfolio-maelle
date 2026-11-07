import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

export default function Form() {
  return (
    <div className="bg-mint flex flex-col p-10 min-h-screen">
      <h1 className="font-audiowide text-3xl pt-6 pb-2 text-center">
        Contactez-moi
      </h1>

      {/* Conteneur flex pour image et formulaire côte à côte */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 flex-1 p-8">
        <div className="flex flex-col items-center gap-4">
          <img
            src="/letter.png"
            alt="illustration d'une enveloppe ouverte d'où sort une lettre avec écrit Hello !"
            className="w-64 h-64 object-cover"
          />

          <p className="font-semibold text-center md:w-100 ">
            Si mon profil vous intéresse et que vous souhaitez avoir plus de
            renseignements sur mon parcours et mes réalisations, vous pouvez me
            contacter via LinkedIn, Github, ou encore par le formulaire ci-joint
          </p>
          <div className="flex gap-5 justify-center pt-6">
            <a
              href="https://github.com/aucherm"
              target="_blank"
              rel="noopener noreferrer"
              className="w-13 h-13 rounded-full border-2 border-black bg-white shadow-[4px_4px_0_0_black] flex items-center justify-center cursor-pointer active:translate-x-0.75 active:translate-y-0.75 active:shadow-none hover:bg-beige"
            >
              <FiGithub className="w-5 h-5 text-black" />
            </a>

            <a
              href="https://www.linkedin.com/in/maëlle-aucher-502646137/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-13 h-13 rounded-full border-2 border-black bg-white shadow-[4px_4px_0_0_black] flex items-center justify-center cursor-pointer active:translate-x-0.75 active:translate-y-0.75 active:shadow-none hover:bg-beige"
            >
              <FaLinkedinIn className="w-5 h-5 text-black" />
            </a>
          </div>
        </div>
        <form
          action="https://formsubmit.co/aucher.maelle@gmail.com"
          method="POST"
          className="bg-green border-2 border-black shadow-[4px_4px_0_0_black] rounded-md p-6 flex flex-col gap-5 w-full max-w-md"
        >
          <div className="text-xl font-extrabold text-gray-800">
            <span className="text-base font-semibold text-black">
              Laissez-moi un message
            </span>
          </div>
          <input
            type="text"
            name="lastname"
            placeholder="Nom"
            required
            className="w-full h-10 rounded-md border-2 border-black bg-white shadow-[4px_4px_0_0_black] px-3 font-semibold text-gray-800 placeholder-gray-500 focus:outline-none focus:border-coral"
          />
          <input
            type="text"
            name="firstname"
            placeholder="Prénom"
            required
            className="w-full h-10 rounded-md border-2 border-black bg-white shadow-[4px_4px_0_0_black] px-3 font-semibold text-gray-800 placeholder-gray-500 focus:outline-none focus:border-coral"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Adresse E-mail"
            className="w-full h-10 rounded-md border-2 border-black bg-white shadow-[4px_4px_0_0_black] px-3 font-semibold text-gray-800 placeholder-gray-500 focus:outline-none focus:border-coral"
          />
          <textarea
            name="message"
            placeholder="Votre message..."
            rows={4}
            className="w-full rounded-md border-2 border-black bg-white shadow-[4px_4px_0_0_black] px-3 py-2 font-semibold text-gray-800 placeholder-gray-500 resize-none focus:outline-none focus:border-coral"
          />
          <button
            type="submit"
            className="mt-6 mx-auto w-32 h-10 rounded-md border-2 border-black bg-white shadow-[4px_4px_0_0_black] font-semibold text-gray-800 active:translate-x-0.75 active:translate-y-0.75 active:shadow-none hover:bg-beige hover:cursor-pointer"
          >
            Envoyer →
          </button>
        </form>
      </div>
    </div>
  );
}
