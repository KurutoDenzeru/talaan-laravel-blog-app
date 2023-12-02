function HeroLanding() {
    return (

    <section class="py-32 bg-gray-100 h-screen flex items-center justify-center">
      
        <div class="max-w-screen-xl mx-auto px-14 sm:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-14">
            
        <div class="mt-4 md:mt-0">

          <img src="../../public/images/gdsclogo.svg" alt="GDSC-Logo"/>

          <h2
            class="text-start lg:text-start font-bold text-3xl sm:text-4xl leading-none mb-6"
          >
            We are Google Developer Student Clubs UE Caloocan.
          </h2>

          <p class="text-lg sm:text-xl leading-relaxed mb-4">
            Welcome to Google Developer Student Clubs UE Caloocan! We're a dynamic
            student tech organization dedicated to fostering both personal and
            product development.
          </p>

          <p class="text-lg sm:text-xl leading-relaxed">
            Our mission is to empower students by providing a supportive
            peer-to-peer learning environment where they can enhance their skills
            and expand their networks.
          </p>			
            </div>

          {/* Form Login */}
            <form class="max-w-screen-xl">

              <h2 class="text-start lg:text-start font-bold text-3xl sm:text-4xl leading-none mb-6">
                Login
              </h2>

              <div class="mb-5">
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email:</label>
                  <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="juandelacruz@gmail.com" required></input>
              </div>

              <div class="mb-5">
                  <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password:</label>
                  <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required></input>                  
              </div>

              <div class="mb-5">
                <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">Don't have an account yet?</a>
              </div>
                
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-14 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>

            </form>

        </div>
    </section>

    );
  }
  
  export default function HeroLogin() {
    return (
      <div>
        <HeroLanding />
      </div>
    );
  }
