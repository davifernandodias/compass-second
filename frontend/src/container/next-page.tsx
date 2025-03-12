import { Button } from "@/components/ui/button";
import { useFilterStore } from "@/store/sidebar-filter";
import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";

interface NextPageProps {
  enableNextPage: boolean;
}

export default function NextPage({ enableNextPage }: NextPageProps) {
  const { setValue, currentPage, finalLimit } = useFilterStore();
  const PAGE_SIZE = 30;
  const totalPages = 10;

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setValue("currentPage", currentPage - 1);
      setValue("initialPage", 0);
      setValue("finalLimit", 75);
    }
  };

  const handleNextPage = () => {
    if (enableNextPage) {
      setValue("currentPage", currentPage + 1);
      setValue("initialPage", finalLimit);
      setValue("finalLimit", finalLimit + PAGE_SIZE);
    }
  };

  const renderPagination = () => {
    const pages = [];
    if (currentPage > 1) pages.push(1);
    if (currentPage > 2) pages.push("...");
    if (currentPage > 0) pages.push(currentPage);
    pages.push(currentPage + 1);
    if (currentPage + 2 < totalPages - 1) pages.push("...");
    if (currentPage + 1 < totalPages) pages.push(totalPages - 1, totalPages);

    return pages.map((page, index) => (
      <p
        key={index}
        className={`p-2 px-3 rounded-md   cursor-pointer transition text-sm font-family-satoshi-regular text-gray-text md:text-base ${
          page === currentPage + 1
            ? "bg-primary-color text-black bg-gray-secundary "
            : "bg-transparent text-gray-700"
        }`}
      >
        {page}
      </p>
    ));
  };

  return (
    <div className="flex flex-wrap gap-2 md:gap-4 items-center justify-center md:justify-between ">
      <Button
        onclick={handlePreviousPage}
        disabled={currentPage === 0}
        className={`flex items-center text-12 md:text-base p-2 px-3 gap-2 font-medium border rounded-lg transition ${
          currentPage === 0
            ? "border-gray-300 text-gray-400 cursor-not-allowed"
            : "border-gray-secundary hover:bg-gray-100"
        }`}
        aria-label="Página anterior"
      >
        <ArrowLeft size={16} />
        Previous
      </Button>

      <div className="flex flex-wrap items-center gap-2 md:gap-3">{renderPagination()}</div>

      <Button
        onclick={handleNextPage}
        disabled={!enableNextPage}
        className={`flex items-center text-12 md:text-base p-2 lg:px-3 gap-2 font-medium border rounded-lg transition ${
          !enableNextPage
            ? "border-gray-300 text-gray-400 cursor-not-allowed"
            : "border-gray-secundary hover:bg-gray-100"
        }`}
        aria-label="Próxima página"
      >
        Next
        <ArrowRight size={16} />
      </Button>
    </div>
  );
}
