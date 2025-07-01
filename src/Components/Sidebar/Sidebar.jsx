import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../redux/actions";

export default function Sidebar() {
  const contacts = useSelector((state) => state.contacts);
  const searchTerm = useSelector((state) => state.searchTerm);
  const filter = useSelector((state) => state.filter);
  const contactStatuss = useSelector((state) => state.contactStatuss);
  const filteredContacts = searchTerm
    ? contacts.filter((contact) =>
        `${contact.firstName} ${contact.lastName} ${contact.email} ${contact.phone}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase()),
      )
    : contacts;
  const totalContacts = filteredContacts.length;
  const dispatch = useDispatch();

  const statusCounts = useMemo(() => {
    const counts = { ...contactStatuss };
    Object.keys(counts).forEach((status) => (counts[status].count = 0));
    filteredContacts.forEach((contact) => {
      contactStatuss[contact.status].count++;
    });
    return counts;
  }, [contacts, contactStatuss, searchTerm]);

  const handleFilterChange = (filterType) => {
    dispatch(setFilter(filterType));
  };

  return (
    <aside className="container border-end position-sticky top-0">
      <div className="row">
        <div className="col-12">
          <div className="contacts-labels">
            <div className="fs-3 mb-5 mt-4 d-flex justify-content-between">Contact Summary</div>
            <ul className="list-group mb-3">
              <li
                onClick={() => handleFilterChange("all")}
                className={`list-group-item d-flex justify-content-between align-items-center list-group-item-action ${filter === "all" ? "active" : ""}`}
                style={{ cursor: "pointer" }}>
                ALL CONTACTS
                <span style={{ backgroundColor: "black" }} className="badge rounded-pill ">
                  {totalContacts}
                </span>
              </li>
              {Object.keys(statusCounts).map((status) => (
                <li
                  onClick={() => handleFilterChange(status)}
                  key={status}
                  className={`list-group-item d-flex justify-content-between align-items-center list-group-item-action ${filter === status ? "active" : ""}`}
                  style={{ cursor: "pointer" }}>
                  {status.toUpperCase()}
                  <span style={{ backgroundColor: statusCounts[status].bg }} className="badge rounded-pill">
                    {statusCounts[status].count}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}
