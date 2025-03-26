import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { communityInfo } from '../data/communityData';
import SamplePdf from '../assets/trashpickupcalender.pdf';

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();

  const info = communityInfo.find(item => item.id === Number(id));

  if (!info) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Information not found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-800 flex items-center justify-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const Icon = info.icon;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate('/')}
          className="text-blue-600 hover:text-blue-800 flex items-center mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </button>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-6">
            <Icon className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-800">{info.title}</h1>
          </div>

          <div className="mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              {info.category}
            </span>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600 text-lg mb-6 whitespace-pre-line">
              {info.content}
            </p>
            {info.description && (
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Additional Information</h2>
                <p className="text-gray-600">{info.description}</p>
                <a
                      href={SamplePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 mt-4 inline-block"
                >
                  Download PDF
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;