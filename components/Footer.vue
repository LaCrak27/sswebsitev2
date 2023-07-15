<template>
    <footer class="flex items-center justify-between h-24 sticky top-[105vh] px-[5%] mt-5 bg-[#191C24]">
        <NuxtLink to="/" class="font-bold text-xl lg:text-2xl">
            Blue Mango Games
        </NuxtLink>
        <p class="hidden lg:block text-gray-500 text-xs">&copy 2022-2023 Blue Mango Games</p>
        <nav class="flex items-center space-x-7 text-gray-600">
            <a href="https://www.buymeacoffee.com/lacrak27" class="hidden sm:block">
                <button
                    class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Buy me a coffee!
                </button>
            </a>
            <a href="https://discord.gg/3NTTxVJ3H4">
                <button
                    class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Discord
                </button>
            </a>
            <a href="mailto:support@starstrikegame.com">
                <button
                    class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Support
                </button>
            </a>
        </nav>  
    </footer>
</template>