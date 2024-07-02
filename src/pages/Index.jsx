import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/images/ufo-background.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold">UFO Sightings and Information</h1>
          <p className="mt-4 text-xl">Explore the unknown</p>
          <Button className="mt-8">Report a Sighting</Button>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center">About Us</h2>
        <p className="mt-4 text-lg text-center">
          Our mission is to gather and share information about UFO sightings from around the world.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Fact 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>UFO stands for Unidentified Flying Object.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Fact 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Many UFO sightings have been reported by credible witnesses, including pilots and military personnel.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recent Sightings Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center">Recent Sightings</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Sighting 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Location: Area 51</p>
              <p>Date: 2023-10-01</p>
              <p>Description: A bright light moving erratically in the sky.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Sighting 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Location: Roswell</p>
              <p>Date: 2023-09-15</p>
              <p>Description: A disc-shaped object hovering above the ground.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Sighting 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Location: Phoenix</p>
              <p>Date: 2023-08-30</p>
              <p>Description: Multiple lights forming a V-shape in the night sky.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center">Contact Us</h2>
        <form className="mt-8 max-w-lg mx-auto space-y-4">
          <Input placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Input placeholder="Location" />
          <Input type="date" placeholder="Date" />
          <Textarea placeholder="Description" />
          <Input type="file" />
          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>Follow us on social media</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="text-white">Facebook</a>
            <a href="#" className="text-white">Twitter</a>
            <a href="#" className="text-white">Instagram</a>
          </div>
          <p className="mt-4">Contact us at info@ufosightings.com</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;