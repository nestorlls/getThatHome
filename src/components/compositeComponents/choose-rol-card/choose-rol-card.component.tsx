import React from 'react';
import { Link } from 'react-router-dom';

import { ROL } from '@common/constant';
import {
  RolCard,
  LandLordIllustrator,
  SeekerIllustration,
} from '@components/baseComponents';

export const ChooseRolCard: React.FC = (): React.JSX.Element => {
  return (
    <div className="card-roles__wrapper">
      <Link to={`/signup/${'landlord'}`}>
        <RolCard rol={ROL.LANDLORD.NAME} description={ROL.LANDLORD.DESCRIPTION}>
          <LandLordIllustrator
            fillPrimary={ROL.LANDLORD.COLORS.PRIMARY}
            fillSecondary={ROL.LANDLORD.COLORS.SECONDARY}
            fillTertiary={ROL.LANDLORD.COLORS.TERTIARY}
            fillQuaternary={ROL.LANDLORD.COLORS.QUATERNARY}
          />
        </RolCard>
      </Link>
      <Link to={`/signup/${'homeseeker'}`}>
        <RolCard
          rol={ROL.HOMESEEKER.NAME}
          description={ROL.HOMESEEKER.DESCRIPTION}
        >
          <SeekerIllustration
            fillPrimary={ROL.HOMESEEKER.COLORS.PRIMARY}
            fillSecondary={ROL.HOMESEEKER.COLORS.SECONDARY}
            fillTertiary={ROL.HOMESEEKER.COLORS.TERTIARY}
          />
        </RolCard>
      </Link>
    </div>
  );
};
