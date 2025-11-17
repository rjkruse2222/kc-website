interface CaseStudyCardProps {
  industry: string;
  baseline: string;
  strategy: string;
  impact: string;
  timeline?: string;
}

export default function CaseStudyCard({
  industry,
  baseline,
  strategy,
  impact,
  timeline
}: CaseStudyCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
      <div className="inline-block px-3 py-1 bg-light-blue/20 text-primary text-xs font-semibold rounded-full mb-4">
        {industry}
      </div>
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-text-gray mb-1">Baseline</h4>
          <p className="text-text-dark">{baseline}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-text-gray mb-1">Strategy</h4>
          <p className="text-text-dark">{strategy}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-text-gray mb-1">Measured Impact</h4>
          <p className="text-primary font-semibold">{impact}</p>
        </div>
        {timeline && (
          <div className="text-sm text-text-gray pt-2 border-t border-gray-200">
            Timeline: {timeline}
          </div>
        )}
      </div>
    </div>
  );
}
