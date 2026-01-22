import SectionHeading from "./SectionHeading";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function PageHeader({ title, subtitle, className = "" }: PageHeaderProps) {
  return (
    <section className={`relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-20 sm:py-32 ${className}`}>
      {/* Logo watermark background */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div 
          className="absolute inset-0 dark:hidden"
          style={{
            backgroundImage: 'url("/logo-mark.svg")',
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px',
            backgroundPosition: 'center',
          }}
        />
        <div 
          className="absolute inset-0 hidden dark:block"
          style={{
            backgroundImage: 'url("/logo-mark-dark.svg")',
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px',
            backgroundPosition: 'center',
          }}
        />
      </div>
      
      {/* Decorative gradient blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200/20 dark:bg-purple-900/10 rounded-full blur-3xl"></div>
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/60 dark:to-gray-950/60"></div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading title={title} subtitle={subtitle} />
        </div>
      </div>
    </section>
  );
}

