import PublicLayout from "@/layouts/PublicLayout"



import { useAppSelector } from "@/hooks";
import CategoryList from "./category_list";
import Promotion from "./promotion";
import RecentServices from "./recent_service";
import Insights from "./insights";
import InterestedServices from "./interested_service";
import FeaturedServices from "./featured_service";
import WhatsNew from "./whats_new";
import GetStarted from "./get_started";

export default function HomePage() {

  const { isCustomer, isProviderProfileDone } = useAppSelector(state => state.app);
  return (
    <PublicLayout>

      {/* Get started */}
      {!isCustomer && !isProviderProfileDone && <GetStarted />}
      {/* Get started */}

      {/*Insights */}
      {!isCustomer && <Insights />}
      {/*Insights */}


      {/* Categories */}
      {isCustomer && <CategoryList />}
      {/* Categories */}

      {/* Promotion */}
      <Promotion />
      {/* Promotion */}

      {/* Recents Services */}
      {!isCustomer && <RecentServices />}
      {/* Recents Services */}

      {/* Interested Services */}
      <InterestedServices />
      {/* Interested Services */}

      {/* Featured Services */}
      {isCustomer && <FeaturedServices />}
      {/* Featured Services */}


      {/* Whats New */}
      <WhatsNew />
      {/* Whats New */}
    </PublicLayout>
  )
} 