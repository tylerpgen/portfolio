import { useState } from "react";
import { AppBar, IconButton, Link, SwipeableDrawer, Toolbar, Typography, Divider, List, ListItem } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
];

const NewNavbar = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky" sx={{ background: "#1E212D", boxShadow: "none" }}>
      <Toolbar sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
        {isNonMobileScreens
          ? navigationLinks.map((item) => (
              <Link
                color="white"
                variant="button"
                underline="none"
                href={item.href}
                sx={{ mx: 20, "&:hover": { textDecoration: "underline" } }}
              >
                <Typography variant="h6" fontWeight="600" fontFamily="Inter">
                  {item.name}
                </Typography>
              </Link>
            ))
          : null}
        {!isNonMobileScreens ? (
          <IconButton sx={{ ml: "auto" }}>
            <MenuIcon sx={{ color: "white", fontSize: 40 }} onClick={() => setOpen(true)} />
          </IconButton>
        ) : null}
      </Toolbar>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        PaperProps={{ style: { height: "100vh", width: "100%", background: "#bbe1fa" } }}
      >
        <IconButton>
          <ChevronRightIcon sx={{ color: "black", fontSize: 40 }} onClick={() => setOpen(false)} />
        </IconButton>
        <Divider sx={{ backgroundColor: "black", height: "1px" }} />
        <List>
          {navigationLinks.map((item) => (
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Link
                color="textPrimary"
                variant="button"
                underline="none"
                href={item.href}
                sx={{ color: "black", "&:hover": { color: "black" } }}
              >
                <Typography variant="h6" fontWeight="600" fontFamily="Inter" sx={{ fontSize: "1.5rem" }}>
                  {item.name}
                </Typography>
              </Link>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
};

export default NewNavbar;
