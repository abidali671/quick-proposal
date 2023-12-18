const UnknownKey = ({ unknown }: { unknown: string }) => {
  const unknown_keys = unknown.split(", ");

  const error_msg = `${unknown_keys.join(", ")} ${
    unknown_keys.length > 1 ? "are invalid keys" : "is a invalid key"
  }`;

  return error_msg;
};

export default UnknownKey;
