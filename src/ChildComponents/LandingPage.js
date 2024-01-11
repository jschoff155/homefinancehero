import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function LandingPage() {
  return (
    <Box>
      <Typography textAlign={"center"} mx={8} my={4}>
        Welcome to your mortgage temperature check. When looking to purchase a
        home there are numerous things to consider prior to contacting a lender.
        These include: income, assets, liabilities, credit score, and more. The
        purpose of this application is to give you advise on what areas you
        might need to improve on rather than having your credit pulled and
        reducing your score for no reason when you could stage yourself for
        success better knowing what comes next. Please review the areas above
        for your information. These are all estimates and are not a full denial
        or approval by any means, the information here is meant to be
        informative at best and you should apply with a lending institution for
        a definitive answer on whether or not you are able to purchase a home.
      </Typography>
    </Box>
  );
}

export default LandingPage;
