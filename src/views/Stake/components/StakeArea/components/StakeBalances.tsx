import { NetworkId } from "src/constants";
import { DecimalBigNumber } from "src/helpers/DecimalBigNumber/DecimalBigNumber";
import { nonNullable } from "src/helpers/types/nonNullable";
import {
  useFuseBalance,
  useGohmBalance,
  useGohmTokemakBalance,
  useOhmBalance,
  useSohmBalance,
  useV1SohmBalance,
  useWsohmBalance,
} from "src/hooks/useBalance";
import { useCurrentIndex } from "src/hooks/useCurrentIndex";
import { useTestableNetworks } from "src/hooks/useTestableNetworks";

import { t } from "@lingui/macro";
import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import { DataRow } from "@olympusdao/component-library";

const DECIMAL_PLACES_SHOWN = 4;

const hasVisibleBalance = (balance?: DecimalBigNumber) =>
  balance && balance.toApproxNumber() > 9 / Math.pow(10, DECIMAL_PLACES_SHOWN + 1);

const formatBalance = (balance?: DecimalBigNumber) =>
  balance?.toString({ decimals: DECIMAL_PLACES_SHOWN, trim: false, format: true });

export const StakeBalances = () => {
  const networks = useTestableNetworks();
  const { data: currentIndex } = useCurrentIndex();

  const gohmBalances = useGohmBalance();
  const wsohmBalances = useWsohmBalance();

  const ohmBalance = useOhmBalance()[networks.MAINNET].data;
  const sohmBalance = useSohmBalance()[networks.MAINNET].data;
  const v1sohmBalance = useV1SohmBalance()[networks.MAINNET].data;
  const gohmFuseBalance = useFuseBalance()[NetworkId.MAINNET].data;
  const gohmTokemakBalance = useGohmTokemakBalance()[NetworkId.MAINNET].data;

  const sohmTokens = [sohmBalance, v1sohmBalance];

  const gohmTokens = [
    gohmFuseBalance,
    gohmTokemakBalance,
    gohmBalances[networks.MAINNET].data,
    gohmBalances[networks.ARBITRUM].data,
    gohmBalances[networks.AVALANCHE].data,
    gohmBalances[NetworkId.POLYGON].data,
    gohmBalances[NetworkId.FANTOM].data,
    wsohmBalances[networks.MAINNET].data,
    wsohmBalances[networks.ARBITRUM].data,
    wsohmBalances[networks.AVALANCHE].data,
    gohmBalances[NetworkId.OPTIMISM].data,
  ];

  const totalSohmBalance = sohmTokens
    .filter(nonNullable)
    .reduce((res, bal) => res.add(bal), new DecimalBigNumber("0", 9));

  const totalGohmBalance = gohmTokens
    .filter(nonNullable)
    .reduce((res, bal) => res.add(bal), new DecimalBigNumber("0", 18));

  const totalStakedBalance = currentIndex && formatBalance(totalGohmBalance.mul(currentIndex).add(totalSohmBalance));

  const allBalancesLoaded = sohmTokens.every(Boolean) && gohmTokens.every(Boolean);

  return (
    <>
      <DataRow
        id="user-balance"
        title={t`Unstaked Balance`}
        isLoading={!ohmBalance}
        balance={`${formatBalance(ohmBalance)} EXO`}
      />

      <Accordion className="stake-accordion" square defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore className="stake-expand" />}>
          <DataRow
            id="user-staked-balance"
            isLoading={!allBalancesLoaded}
            title={t`Total Staked Balance`}
            balance={`${totalStakedBalance} sEXO`}
          />
        </AccordionSummary>

        <AccordionDetails>
          <DataRow
            indented
            title={t`sEXO`}
            id="sohm-balance"
            isLoading={!sohmBalance}
            balance={`${formatBalance(sohmBalance)} sEXO`}
          />

          <DataRow
            indented
            title={t`gEXO`}
            isLoading={!gohmBalances[networks.MAINNET].data}
            balance={`${formatBalance(gohmBalances[networks.MAINNET].data)} gEXO`}
          />

          {hasVisibleBalance(gohmBalances[NetworkId.ARBITRUM].data) && (
            <DataRow
              indented
              title={t`gEXO (Arbitrum)`}
              isLoading={!gohmBalances[NetworkId.ARBITRUM].data}
              balance={`${formatBalance(gohmBalances[NetworkId.ARBITRUM].data)} gEXO`}
            />
          )}

          {hasVisibleBalance(gohmBalances[NetworkId.AVALANCHE].data) && (
            <DataRow
              indented
              title={t`gEXO (Avalanche)`}
              isLoading={!gohmBalances[NetworkId.AVALANCHE].data}
              balance={`${formatBalance(gohmBalances[NetworkId.AVALANCHE].data)} gEXO`}
            />
          )}

          {hasVisibleBalance(gohmBalances[NetworkId.POLYGON].data) && (
            <DataRow
              indented
              title={t`gEXO (Polygon)`}
              isLoading={!gohmBalances[NetworkId.POLYGON].data}
              balance={`${formatBalance(gohmBalances[NetworkId.POLYGON].data)} gEXO`}
            />
          )}

          {hasVisibleBalance(gohmBalances[NetworkId.FANTOM].data) && (
            <DataRow
              indented
              title={t`gEXO (Fantom)`}
              isLoading={!gohmBalances[NetworkId.FANTOM].data}
              balance={`${formatBalance(gohmBalances[NetworkId.FANTOM].data)} gEXO`}
            />
          )}

          {hasVisibleBalance(gohmBalances[NetworkId.OPTIMISM].data) && (
            <DataRow
              indented
              title={t`gEXO (Optimism)`}
              isLoading={!gohmBalances[NetworkId.OPTIMISM].data}
              balance={`${formatBalance(gohmBalances[NetworkId.OPTIMISM].data)} gEXO`}
            />
          )}

          {hasVisibleBalance(gohmTokemakBalance) && (
            <DataRow
              indented
              title={t`gEXO (Tokemak)`}
              isLoading={!gohmTokemakBalance}
              balance={`${formatBalance(gohmTokemakBalance)} gEXO`}
            />
          )}

          {hasVisibleBalance(gohmFuseBalance) && (
            <DataRow
              indented
              title={t`gEXO (Fuse)`}
              isLoading={!gohmFuseBalance}
              balance={`${formatBalance(gohmFuseBalance)} gEXO`}
            />
          )}

          {hasVisibleBalance(v1sohmBalance) && (
            <DataRow
              indented
              title={t`sEXO (v1)`}
              isLoading={!v1sohmBalance}
              balance={`${formatBalance(v1sohmBalance)} sEXO`}
            />
          )}

          {hasVisibleBalance(wsohmBalances[networks.MAINNET].data) && (
            <DataRow
              indented
              title={t`wsEXO`}
              isLoading={!wsohmBalances[networks.MAINNET].data}
              balance={`${formatBalance(wsohmBalances[networks.MAINNET].data)} wsEXO`}
            />
          )}

          {hasVisibleBalance(wsohmBalances[NetworkId.ARBITRUM].data) && (
            <DataRow
              indented
              title={t`wsEXO (Arbitrum)`}
              isLoading={!wsohmBalances[NetworkId.ARBITRUM].data}
              balance={`${formatBalance(wsohmBalances[NetworkId.ARBITRUM].data)} wsEXO`}
            />
          )}

          {hasVisibleBalance(wsohmBalances[NetworkId.AVALANCHE].data) && (
            <DataRow
              indented
              title={t`wsEXO (Avalanche)`}
              isLoading={!wsohmBalances[NetworkId.AVALANCHE].data}
              balance={`${formatBalance(wsohmBalances[NetworkId.AVALANCHE].data)} wsEXO`}
            />
          )}
        </AccordionDetails>
      </Accordion>
    </>
  );
};
