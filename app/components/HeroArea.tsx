export default function HeroArea({ title, description }) {
  return (
    <section className="bg-white dark:bg-gray-900 py-16">
      <div className="py-12 px-4 mx-auto max-w-screen-xl text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {title}
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          {description}
        </p>
      </div>
    </section>
  );
}
