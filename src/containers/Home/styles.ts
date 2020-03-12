import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  content: {
    fontSize: "20px",
    fontWeight: 500,
    padding: "0 15px",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  contentHeader: {
    margin: "0 auto 30px"
  },
  contentHeaderLogo: {
    width: "50px"
  },
  contentHeaderTitle: {
    display: "inline-block",
    marginLeft: "5px"
  },
  contentBody: {},
  contentBodyDescription: {
    marginBottom: "50px"
  },
  panels: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    flexFlow: "row wrap",
    margin: "0 -15px"
  },
  panel: {
    flex: "0 0 33.33333%",
    maxWidth: "250px",
    margin: "0 15px",
    height: "150px",
    backgroundColor: "#046a38",
    position: "relative"
  },
  panelLink: {
    display: "flex",
    height: "100%",
    borderRadius: "3px",
    textDecoration: "none",
    alignItems: "center",
    justifyContent: "center"
  },
  panelText: {
    fontSize: "18px",
    fontWeight: 400,
    padding: "0 20px",
    color: "#fff"
  },
  panelImage: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
});
