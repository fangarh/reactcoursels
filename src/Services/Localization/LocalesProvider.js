import React from "react";
import { connect } from "react-redux";

import { IntlProvider } from "react-intl";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const LocalesProviderWrapper = (props) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={props.fnsLocale}>
      <IntlProvider messages={props.localeMessages} locale={props.locale}>
        {props.children}
      </IntlProvider>
    </MuiPickersUtilsProvider>
  );
};

const mapStateToProps = (state) => ({
  fnsLocale: state.locale.fnsLocale,
  localeMessages: state.locale.localeMessages,
  locale: state.locale.curLocal,
});

export default connect(mapStateToProps, null)(LocalesProviderWrapper);
