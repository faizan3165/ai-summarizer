import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center flex-row w-full mb-10 pt-3">
        <img src={logo} alt="sumzLogo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/faizan3165/ai-summarizer")
          }
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with
        <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>

      <h2 className="desc">
        Streamline your reading experience using Summize, a freely available
        tool for summarizing articles. This open-source summarizer condenses
        lengthy articles into brief and concise summaries, making it easier for
        you to digest information quickly and efficiently.
      </h2>
    </header>
  );
};

export default Hero;
