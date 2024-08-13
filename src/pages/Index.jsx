import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Paw } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center flex items-center justify-center">
          <Paw className="mr-2" /> All About Cats <Paw className="ml-2" />
        </h1>
        
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
          alt="Cute cat"
          className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg mb-8"
        />

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Characteristics of Cats</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6">
              <li>Independent nature</li>
              <li>Excellent hunters with sharp claws and teeth</li>
              <li>Flexible bodies and quick reflexes</li>
              <li>Keen senses, especially hearing and night vision</li>
              <li>Communicate through vocalizations, body language, and scent</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Popular Cat Breeds</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6">
              <li>Siamese: Known for their distinctive coloring and vocal nature</li>
              <li>Maine Coon: Large, fluffy cats with tufted ears</li>
              <li>Persian: Recognizable by their flat faces and long, luxurious coats</li>
              <li>Bengal: Wild-looking cats with leopard-like spots</li>
              <li>Scottish Fold: Characterized by their folded ears and round faces</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
