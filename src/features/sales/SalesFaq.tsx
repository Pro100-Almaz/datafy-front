import { Container } from "@/ui/Container";
import { ChevronRight } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const faqData: { q: string; a?: string }[] = [
  {
    q: "Зачем проверять контрагентов?",
    a: "Проверка контрагента — это комплексная и не разовая, как многим может показаться, работа. Но она необходима, ведь на кону — деньги и репутация компании. Не зря налоговые органы предупреждают, что ответственность за выбор контрагента полностью лежит на компании. Поэтому она должна быть заинтересована в оценке рисков и налоговых последствий, которые могут возникнуть в результате сотрудничества с сомнительными контрагентами. Если у налоговой появятся претензии к одному из ваших контрагентов, вполне вероятно, что вы невольно окажетесь вовлечены в неприятности.",
  },
  {
    q: "Какие документы нужны для проверки контрагента?",
    a: "Для проверки контрагента вам понадобятся его учредительные документы, бухгалтерская отчетность, сведения о руководителях и учредителях, а также данные о финансовом состоянии и репутации компании.",
  },
  {
    q: "Как проверить надежность контрагента?",
    a: "Для проверки надежности контрагента используйте доступные базы данных, такие как ЕГРЮЛ, ФНС, а также специальные сервисы для проверки контрагентов. Обратите внимание на историю компании, наличие судебных дел, финансовые показатели и отзывы других компаний.",
  },
  {
    q: "Что делать, если контрагент оказался ненадежным?",
    a: "Если вы обнаружили, что контрагент ненадежен, рекомендуется прекратить с ним сотрудничество, чтобы избежать возможных рисков. Также можно обратиться за юридической консультацией для минимизации убытков и защиты ваших интересов.",
  },
  {
    q: "Как часто нужно проверять контрагентов?",
    a: "Проверку контрагентов рекомендуется проводить регулярно, особенно перед заключением крупных сделок или при изменении условий сотрудничества. Также полезно периодически мониторить информацию о ключевых партнерах для своевременного выявления возможных рисков.",
  },
] as const;

export const SalesFaq = () => {
  return (
    <Container>
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-full md:col-span-1">
          <h1 className="text-4xl md:text-5xl font-semibold">
            Часто задаваемые вопросы
          </h1>
          <h2 className="font-semibold text-sm md:text-xl mt-5 text-secondary">
            Проверьте контрагентов уже сейчас!
          </h2>
          <Link href="/search">
            <Button
              size={"lg"}
              className="mt-6 gap-3 relative right-8 md:right-8 text-accent-foreground"
              variant={"link"}
            >
              Начать проверку
              <ChevronRight className="size-5" />
            </Button>
          </Link>
        </div>
        <Accordion
          type="multiple"
          defaultValue={["item-0"]}
          className="col-span-3 md:col-span-2 flex gap-3 flex-col"
        >
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className={""}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Container>
  );
};
