import SignInButton from "@/components/SignInButton";

// export default function Home() {
const Home: React.FC = () => {
  return (
    <div className="container mx-auto min-h-screen flex justify-center">
      <div className="p-4 flex items-center">
        {/* <button onClick={signInWithGoogle} className="border border-red-500 p-2 rounded-xl text-red-500">Login with Google</button> */}
        <SignInButton />
      </div>
    </div>
  )
}

export default Home;