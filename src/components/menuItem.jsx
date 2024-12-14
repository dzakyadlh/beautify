import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MenuItem({ item }) {
  return (
    <button className="w-full flex items-center justify-between bg-white rounded-lg px-5 py-3 hover:bg-tertiary hover:border border-black transition duration-300">
      <div className="flex items-center gap-4">
        <div className="w-8">
          <FontAwesomeIcon icon={item.icon} className="text-xl text-primary" />
        </div>
        <span className="text font-medium">{item.label}</span>
      </div>
      <FontAwesomeIcon icon={faChevronRight} className="text-gray-400" />
    </button>
  );
}
