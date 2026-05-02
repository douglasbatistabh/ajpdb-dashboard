import { signIn } from "@/auth";
import { Brasao } from "@/components/Brasao";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-travertino-100 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-12">
          <Brasao size={120} className="mx-auto mb-6" />
          <h1 className="heading-serif text-3xl text-burgundy-700 mb-2">
            Integração AJPDB
          </h1>
          <p className="text-burgundy-900 italic font-serif tracking-wide">
            Dashboard Operacional
          </p>
          <p className="mt-1 text-xs text-gold-700 italic tracking-widest uppercase">
            Audentes Fortuna Iuvat
          </p>
        </div>

        <div className="bg-travertino-50 border border-travertino-300 p-8">
          <h2 className="heading-serif text-lg text-burgundy-700 mb-6 text-center">
            Acesso restrito
          </h2>

          <form
            action={async () => {
              "use server";
              await signIn("google", { redirectTo: "/" });
            }}
          >
            <button
              type="submit"
              className="w-full py-3 px-6 bg-burgundy-700 text-gold-100 hover:bg-burgundy-800
                       transition-colors uppercase tracking-widest text-xs font-medium"
            >
              Entrar com Google
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-gold-700 italic">
            Apenas a conta autorizada do procurador pode acessar.
          </p>
        </div>

        <p className="mt-12 text-center text-[10px] text-gold-700/60 italic font-serif tracking-wider">
          Desenvolvido por <strong className="text-gold-800">Douglas Alexander Batista</strong>
          {" · "}abril/2026 · OAB/RJ 249.653
        </p>
      </div>
    </main>
  );
}
