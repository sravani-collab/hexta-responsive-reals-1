import Image from 'next/image'

// Client logos - you would replace these with actual client images
const clients = [
  { name: 'GAIL', logo: '/images/clients/gail.jpeg' },
  { name: 'Client 2', logo: '/images/clients/continental-coffee.jpeg' },
  { name: 'Client 3', logo: '/images/clients/inwf.jpeg' },
  { name: 'Client 4', logo: '/images/clients/occ.jpeg' },
  { name: 'Client 5', logo: '/images/clients/ramky-group.jpg' },
  { name: 'Client 6', logo: '/images/clients/vignan.jpeg' }
]

export default function ClientsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-dark mb-2">OUR CLIENTS</h2>
          <div className="h-px w-28 bg-dark mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center">
            {clients.map((client, index) => (
              <div key={index} className="flex justify-center items-center h-24">
                <div className="relative h-full w-full max-w-[150px]">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="inline-block text-primary font-semibold hover:underline">
            See all our clients
          </a>
        </div>
      </div>
      
    </section>
  )
}