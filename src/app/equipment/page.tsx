import Image from "next/image";
import { Check, Wrench } from "lucide-react";
import { equipmentData } from "@/lib/equipment-data";

export default function EquipmentPage() {
  return (
    <main className="container mx-auto py-20 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-headline font-bold">
          Our Equipment
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          We use only the latest, safest, and most reliable paragliding equipment,
          ensuring your adventure is both thrilling and secure.
        </p>
      </div>

      {/* Main Equipment Section */}
      <section id="core-gear" className="mb-20">
        <h2 className="text-3xl font-headline font-bold text-center mb-12">
          Our Core Gear
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {equipmentData.main.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-lg hover:shadow-xl transition flex flex-col md:flex-row overflow-hidden"
            >
              <div className="md:w-1/3 h-64 md:h-auto overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 md:w-2/3 flex flex-col">
                <h3 className="font-headline font-bold text-xl text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4 flex-grow">
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-muted-foreground">
                      <Check className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Rental & Pro Shop Section */}
      <section id="rental-shop" className="mb-20">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-headline font-bold">Rental & Pro Shop</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
                Need gear? We offer a wide selection of rental equipment and a pro shop for all your paragliding needs.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-card p-8 rounded-xl shadow-lg">
            <div className="grid grid-cols-2 gap-4">
                {equipmentData.rental.images.map((img, index) => (
                    <div key={index} className="overflow-hidden rounded-lg">
                        <Image src={img.url} alt={img.alt} width={400} height={300} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"/>
                    </div>
                ))}
            </div>
            <div>
                <h3 className="font-headline font-bold text-2xl mb-4">What We Offer</h3>
                <ul className="space-y-3">
                    {equipmentData.rental.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-muted-foreground">
                            <Wrench className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <section id="brands">
        <h2 className="text-3xl font-headline font-bold text-center mb-12">
          Brands We Trust
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
          {equipmentData.brands.map((brand, index) => (
            <div key={index} className="flex justify-center items-center p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition h-24 grayscale hover:grayscale-0 contrast-75 hover:contrast-100">
              <div className="relative w-full h-16">
                 <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    fill
                    className="object-contain"
                  />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
