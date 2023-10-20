import { Textarea } from '@/app/components/ui/textarea';
import { Button } from '@/app/components/ui/button';

function PromptSection() {
  return (
    <div>
      <div className="conatainer">
        <div className="m-5 p-5">
          <div className="grid w-full gap-2">
            <Textarea placeholder="Type your prompt here." />
            <Button>Generate</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromptSection;
