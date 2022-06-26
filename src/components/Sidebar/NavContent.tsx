import React, { useEffect, useState } from "react";
import { t, Trans } from "@lingui/macro";
import { Box, Link, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Icon, NavItem } from "@olympusdao/component-library";
import { NavLink } from "react-router-dom";
import { sortByDiscount } from "src/helpers/bonds/sortByDiscount";
import { Environment } from "src/helpers/environment/Environment/Environment";
import { useTestableNetworks } from "src/hooks/useTestableNetworks";
import { useWeb3Context } from "src/hooks/web3Context";
import { BondDiscount } from "src/views/Bond/components/BondDiscount";
import { useLiveBonds } from "src/views/Bond/hooks/useLiveBonds";
// import useTheme from "../../hooks/useTheme";

import darkLogo from "../../assets/Exodus-Vertical-Logo_2.svg";

import WalletAddressEns from "../TopBar/Wallet/WalletAddressEns";

const PREFIX = "NavContent";

const classes = {
  gray: `${PREFIX}-gray`,
};

const StyledBox = styled(Box)(({ theme }) => ({
  [`& .${classes.gray}`]: {
    color: theme.colors.gray[90],
  },
}));

type NavContentProps = {
  theme: string;
};

const NavContent: React.VFC<NavContentProps> = ({ theme }) => {
  const currentTheme = themeMode => {
    switch (themeMode) {
      case "dark":
        return "/Exodus_2/Exodus-Vertical-Logo_2.svg";
      case "light":
        return "/Exodus_2/Exodus-Vertical-Logo_2_black.svg";
      case "girth":
        return "/Exodus_2/Exodus-Vertical-Logo_2_black.svg";

      default:
        return "/Exodus_2/Exodus-Vertical-Logo_2.svg";
    }
  };
  const [svgImage, setSvgImage] = useState("/Exodus_2/Exodus-Vertical-Logo_2.svg");
  const { networkId } = useWeb3Context();
  const networks = useTestableNetworks();
  // const [theme, toggleTheme,mounted, _] = useTheme();
  // useEffect(() => {
  //   setSvgImage(currentTheme(theme))
  // }, [theme]);

  return (
    <Paper className="dapp-sidebar">
      <Box className="dapp-sidebar-inner" display="flex" justifyContent="space-between" flexDirection="column">
        <div className="dapp-menu-top">
          <Box className="branding-header">
            <Link href="https://exodao.finance" target="_blank">
              <img src={currentTheme(theme)} style={{ width: 100, height: 85 }} />
            </Link>
            <WalletAddressEns />
          </Box>

          <div className="dapp-menu-links">
            <div className="dapp-nav" id="navbarNav">
              {networkId === networks.MAINNET ? (
                <>
                  <NavItem to="/dashboard" icon="dashboard" label={t`Dashboard`} />

                  <NavItem to="/bonds" icon="bond" label={t`Bond`}>
                    <Bonds />
                    <InverseBonds />
                  </NavItem>

                  <NavItem to="/stake" icon="stake" label={t`Stake`} />

                  {Environment.isGiveEnabled() && <NavItem to="/give" icon="give" label={t`Give`} />}

                  <NavItem to="/wrap" icon="wrap" label={t`Wrap`} />
                </>
              ) : (
                <>
                  <NavItem to="/wrap" icon="wrap" label={t`Wrap`} />
                </>
              )}
            </div>
          </div>
        </div>

        <StyledBox display="flex" justifyContent="space-between" paddingX="50px" paddingY="24px">
          <Link href="https://github.com/ExodusDao" target="_blank">
            <Icon name="github" className={classes.gray} />
          </Link>

          <Link href="https://ExodusDao.medium.com/" target="_blank">
            <Icon name="medium" className={classes.gray} />
          </Link>

          <Link href="https://twitter.com/ExodusDao" target="_blank">
            <Icon name="twitter" className={classes.gray} />
          </Link>

          <Link href="https://discord.gg/6QjjtUcfM4" target="_blank">
            <Icon name="discord" className={classes.gray} />
          </Link>
        </StyledBox>
      </Box>
    </Paper>
  );
};

const Bonds: React.VFC = () => {
  const bonds = useLiveBonds().data;

  if (!bonds || bonds.length === 0) return null;

  return (
    <Box ml="26px" mt="16px" mb="12px">
      {sortByDiscount(bonds)
        .filter(bond => !bond.isSoldOut)
        .map(bond => (
          <Box mt="8px">
            <Link key={bond.id} component={NavLink} to={`/bonds/${bond.id}`}>
              <Typography variant="body1">
                <Box display="flex" flexDirection="row" justifyContent="space-between">
                  {bond.quoteToken.name}
                  <BondDiscount discount={bond.discount} />
                </Box>
              </Typography>
            </Link>
          </Box>
        ))}
    </Box>
  );
};

const InverseBonds: React.VFC = () => {
  const bonds = useLiveBonds({ isInverseBond: true }).data;

  if (!bonds || bonds.length === 0) return null;

  return (
    <Box ml="26px" mt="16px" mb="12px">
      <Typography variant="body2" color="textSecondary">
        <Trans>Inverse Bonds</Trans>
      </Typography>

      <Box mt="12px">
        {sortByDiscount(bonds)
          .filter(bond => !bond.isSoldOut)
          .map(bond => (
            <Box mt="8px">
              <Link key={bond.id} component={NavLink} to={`/bonds/inverse/${bond.id}`}>
                <Typography variant="body1">
                  <Box display="flex" flexDirection="row" justifyContent="space-between">
                    {bond.quoteToken.name}
                    <BondDiscount discount={bond.discount} />
                  </Box>
                </Typography>
              </Link>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default NavContent;
